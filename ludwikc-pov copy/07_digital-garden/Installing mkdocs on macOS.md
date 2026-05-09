---
title: Installing mkdocs on macOS
date: 2024-08-08 09:58:20
publish: "true"
slug: mkdocs-install
---

Since `pip` is not supported on macOS, it has to be installed within the virtual environment. 

If you've already installed mkdocs system-wide, uninstall it using
```sh
pipx uninstall mkdocs
rm /Users/USER/.local/bin/mkdocs # clear PATH
```


Create virtual environment, install mkdocs, all the plugins and serve the site

```sh
python3.12 -m venv myenv
source myenv/bin/activate
pip install mkdocs
pip install ... # all the plugins requried by your mkdocs.yml
mkdocs serve
```