# Aseprite Usage Guidelines

## What is Aseprite?

[Aseprite](https://www.aseprite.org/) is a popular animated sprite editor and pixel art tool used to create 2D graphics for games and other applications.

## License Overview

Aseprite uses a **proprietary source-available license** (the [Aseprite EULA](https://github.com/aseprite/aseprite/blob/main/EULA.txt)). This means:

- The **source code is publicly available** on [GitHub](https://github.com/aseprite/aseprite).
- It is **not open-source** in the traditional sense — the license restricts how you can use, modify, and distribute it.

## Can I Use Aseprite for Free by Building from the Git Repo?

**Yes, with important limitations:**

1. **Compiling for personal use is allowed.** The Aseprite license permits you to compile and run the application from source for your own personal use without paying.
2. **You cannot distribute compiled binaries.** You must not share or publish compiled executables of Aseprite — that right is reserved for the Aseprite team/Igara Studio.
3. **You cannot use it commercially without a license.** Using a self-compiled version for commercial purposes is not permitted without purchasing a license.
4. **Only code from before August 2016 is under the GPL license.** Any commits after that date fall under the proprietary EULA.

## How to Build Aseprite from Source

If you choose to build from source for personal use, follow the [official build instructions](https://github.com/aseprite/aseprite/blob/main/INSTALL.md):

```bash
# Clone the repository (with submodules)
git clone --recursive https://github.com/aseprite/aseprite.git
cd aseprite

# Install dependencies (example for Ubuntu/Debian)
sudo apt-get install -y g++ cmake ninja-build libx11-dev libxcursor-dev libxi-dev \
  libgl1-mesa-dev libfontconfig1-dev

# Download Skia (required dependency)
# See: https://github.com/aseprite/skia/releases

# Build
mkdir build && cd build
cmake -G Ninja \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=<path-to-skia> \
  -DSKIA_LIBRARY_DIR=<path-to-skia/out/Release-x64> \
  ..
ninja aseprite
```

For detailed, platform-specific instructions see the [official INSTALL.md](https://github.com/aseprite/aseprite/blob/main/INSTALL.md).

## Summary

| Use Case | Allowed without purchasing? |
|---|---|
| Compile from source for personal use | ✅ Yes |
| Use compiled version for personal projects | ✅ Yes |
| Distribute compiled binaries to others | ❌ No |
| Use for commercial projects | ❌ No (requires purchase) |
| Modify and redistribute source code | ❌ No |

## Recommendation

- **For personal/hobby use:** Building from source is a valid option.
- **For professional or commercial use:** Purchase a license from [aseprite.org](https://www.aseprite.org/) (very affordable — typically under $20).

Purchasing supports the developers and gives you access to official pre-built binaries and future updates.

## References

- [Aseprite Official Website](https://www.aseprite.org/)
- [Aseprite GitHub Repository](https://github.com/aseprite/aseprite)
- [Aseprite EULA](https://github.com/aseprite/aseprite/blob/main/EULA.txt)
- [Aseprite INSTALL.md](https://github.com/aseprite/aseprite/blob/main/INSTALL.md)
- [Aseprite License FAQ](https://www.aseprite.org/faq/#licensing)
