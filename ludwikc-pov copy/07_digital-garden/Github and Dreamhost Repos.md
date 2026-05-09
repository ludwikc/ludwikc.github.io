---
title: Doubling Down on Git
date: 2024-08-05 19:57:33
publish: "true"
slug: git-dreamhost
tags:
  - git
  - tech
---
# SOP for Working with Static Websites

My SOP on working with static websites involves maintaining the code on GitHub while serving the actual website from Dreamhost. Here is the procedure I follow to set up my workflow:

## Steps

1. **Create a GitHub Repository**
   - Create the repository on GitHub as usual.

2. **Clone the Repository to Dreamhost's Domain Folder**
   - Clone the repository in the desired domain folder on Dreamhost.

3. **Add a Second Remote Repository**

   ```sh
   git remote -v
   origin  https://github.com/ludwikc/silnaglowa.pl.git (fetch)
   origin  https://github.com/ludwikc/silnaglowa.pl.git (push)
   ```

   Add the Dreamhost remote:

   ```sh
   git remote add dreamhost ssh://ludwikc@ludwikc.com/home/ludwikc/silnaglowa.pl
   ```

   Verify the remotes:

   ```sh
   git remote -v
   dreamhost ssh://ludwikc@ludwikc.com/home/ludwikc/silnaglowa.pl (fetch)
   dreamhost ssh://ludwikc@ludwikc.com/home/ludwikc/silnaglowa.pl (push)
   origin    https://github.com/ludwikc/silnaglowa.pl.git (fetch)
   origin    https://github.com/ludwikc/silnaglowa.pl.git (push)
   ```

4. **Setup Post-Receive Hook on Dreamhost**

   Create a post-receive hook script in the `.git/hooks/` directory:

   ```sh
   [ludwikc@dreamhost]$ cat ../silnaglowa.pl/.git/hooks/post-receive
   #!/bin/bash
   GIT_WORK_TREE=/home/ludwikc/silnaglowa.pl git checkout -f main
   ```

   Make the hook executable:

   ```sh
   chmod +x .git/hooks/post-receive
   ```

5. **Configure Git to Allow Updating the Current Branch**

   ```sh
   git config receive.denyCurrentBranch updateInstead
   ```

From this point onward, your workflow should be set up and functional.