#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import sys
from pathlib import Path

import numpy as np
from scipy.io.wavfile import write
from scipy.signal import butter, sosfilt

SR = 44100
SEED = 1001
EXPECTED = {
    "AUD-02-water-ambience.wav": "739504aef40a83d83f84ce225d6635604e96736c2910d45300c2f77ab0583813",
    "AUD-03-wet-cardboard-rip.wav": "c6eda42ddde566edd840dff1a7417cbbec7ecd1cacb443716b28b775d8532fa0",
    "AUD-04-paper-catch-rustle.wav": "a7edb5a47c1b7872fa2ce909faef4afdb048e83683470f9c566d050e013433e2",
    "AUD-05-wet-footsteps.wav": "7792faa5284bf24ed9daeb11f16cf6cf723d17f48a4ebafdc87ebd2d598681d2",
    "AUD-06-box-handling.wav": "ebd48029a9a924e482235e6edaafbcfdd93d7d998acdc135eb3d4f471cb94e29",
}

def normalize(x, peak=0.92):
    m = np.max(np.abs(x)) + 1e-12
    return (x / m * peak).astype(np.float32)

def hp(x, cutoff):
    sos = butter(4, cutoff, btype="highpass", fs=SR, output="sos")
    return sosfilt(sos, x)

def lp(x, cutoff):
    sos = butter(4, cutoff, btype="lowpass", fs=SR, output="sos")
    return sosfilt(sos, x)

def stereo(x, width=0.06):
    shift = int(SR * width)
    r = np.roll(x, shift)
    return np.stack([x, r], axis=1)

def generate(out: Path):
    out.mkdir(parents=True, exist_ok=True)
    rng = np.random.default_rng(SEED)

    dur = 25
    n = SR * dur
    white = rng.normal(0, 1, n)
    low = lp(white, 1500)
    mid = hp(lp(rng.normal(0,1,n), 4500), 500)
    t = np.arange(n) / SR
    mod = 0.65 + 0.18*np.sin(2*np.pi*0.19*t) + 0.10*np.sin(2*np.pi*0.071*t+1.2)
    water = 0.56*low*mod + 0.18*mid
    for sec in [1.8, 4.6, 7.1, 9.4, 12.0, 15.7, 18.9, 22.2]:
        start = int(sec*SR)
        L = int(0.12*SR)
        tt = np.arange(L)/SR
        burst = rng.normal(0,1,L) * np.exp(-tt*26)
        burst = hp(burst, 900) * 0.24
        water[start:start+L] += burst
    write(out/"AUD-02-water-ambience.wav", SR, stereo(normalize(water, 0.78)))

    dur = 0.9
    n = int(SR*dur)
    t = np.arange(n)/SR
    noise = rng.normal(0,1,n)
    texture = hp(noise, 1100)
    env = np.exp(-2.2*t) * (0.45 + 0.55*(np.sin(2*np.pi*13*t)**2))
    rip = texture * env
    for sec, amp in [(0.08,0.8),(0.16,0.65),(0.29,0.72),(0.42,0.55),(0.56,0.45)]:
        st=int(sec*SR); L=int(0.035*SR)
        tt=np.arange(L)/SR
        b=hp(rng.normal(0,1,L),1800)*np.exp(-tt*70)*amp
        rip[st:st+L]+=b
    rip += lp(rng.normal(0,1,n),500)*np.exp(-3.5*t)*0.18
    write(out/"AUD-03-wet-cardboard-rip.wav", SR, stereo(normalize(rip), 0.01))

    dur = 0.65
    n = int(SR*dur)
    t = np.arange(n)/SR
    rustle = hp(rng.normal(0,1,n), 2200) * (np.sin(np.pi*np.clip(t/0.5,0,1))**1.3)
    rustle *= 0.42
    st=int(0.42*SR); L=int(0.10*SR)
    tt=np.arange(L)/SR
    slap=hp(rng.normal(0,1,L),1000)*np.exp(-tt*38)*0.72
    rustle[st:st+L]+=slap
    write(out/"AUD-04-paper-catch-rustle.wav", SR, stereo(normalize(rustle, 0.88), 0.018))

    dur=3.8
    n=int(SR*dur)
    feet=np.zeros(n)
    for sec in [0.18, 1.12, 2.15, 3.08]:
        st=int(sec*SR)
        L=int(0.42*SR)
        tt=np.arange(L)/SR
        thump=np.sin(2*np.pi*(82-30*tt)*tt)*np.exp(-tt*13)*0.58
        splash=hp(rng.normal(0,1,L),700)*np.exp(-tt*18)*0.28
        squish=lp(rng.normal(0,1,L),900)*np.exp(-tt*8)*0.16
        feet[st:st+L]+=thump+splash+squish
    write(out/"AUD-05-wet-footsteps.wav", SR, stereo(normalize(feet,0.9), 0.025))

    dur=2.2
    n=int(SR*dur)
    t=np.arange(n)/SR
    rub = hp(lp(rng.normal(0,1,n), 3200), 350)
    motion=(0.4+0.6*np.abs(np.sin(2*np.pi*1.7*t)))*np.exp(-0.45*t)
    box=rub*motion*0.28
    for sec, f in [(0.24,145),(0.78,118),(1.42,132)]:
        st=int(sec*SR); L=int(0.32*SR)
        tt=np.arange(L)/SR
        creak=np.sin(2*np.pi*(f+24*np.sin(2*np.pi*2.1*tt))*tt)*np.exp(-tt*7)*0.22
        box[st:st+L]+=creak
    write(out/"AUD-06-box-handling.wav", SR, stereo(normalize(box,0.82), 0.014))

def verify(out: Path):
    for name, expected in EXPECTED.items():
        digest = hashlib.sha256((out/name).read_bytes()).hexdigest()
        if digest != expected:
            raise SystemExit(f"{name}: SHA-256 mismatch: {digest} != {expected}")
        print(f"✓ {name}: {digest}")

if __name__ == "__main__":
    target = Path(sys.argv[1] if len(sys.argv) > 1 else "public/assets/VID-0001/audio")
    generate(target)
    verify(target)
