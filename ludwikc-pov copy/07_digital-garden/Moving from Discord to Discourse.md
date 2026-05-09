---
title: Moving from Discord to Discourse
date: 2024-08-08 11:41:47
publish: "true"
permalink: discord-discourse
---
Loose notes:
https://github.com/marcushellberg/discord-to-discourse

--- 

## Technical Requirements: 
Here’s a detailed project requirements list based on your notes for moving your Discord community to Discourse:

### 1. **Backup of Discord Content**
   - **1.1. Backup of #forum-hackerów Channel**
     - Extract all messages, files, and media from the #forum-hackerów channel.
     - Ensure the backup is in a format that can be imported into Discourse (e.g., JSON, CSV).
     - Consider creating a read-only channel on Discourse for archived content.
   - **1.2. Backup of Lifehakerów Channel (Optional)**
     - Evaluate the necessity of backing up Lifehakerów content.
     - If decided to proceed, follow the same steps as in 1.1 for this channel.

### 2. **User Data Migration**
   - **2.1. List of Users with IDs**
     - Extract a list of all users from the Discord server, including their unique Discord IDs.
   - **2.2. Role and Permissions Mapping**
     - Export a list of user roles from Discord.
     - Map Discord roles to corresponding roles and permissions on Discourse.

### 3. **Installation and Configuration of Discourse**
   - **3.1. Set Up Discourse Instance**
     - Install Discourse on the domain [dyskusje.hackerzy.pl](http://dyskusje.hackerzy.pl).
     - Configure Discourse settings for the community, including categories, permissions, and themes.
   - **3.2. Import Users and Content**
     - Use Discourse’s import scripts from their GitHub repository to migrate users and content.
       - **3.2.1. User Import:** Manually create user accounts on Discourse, ensuring that usernames and other identifiers match those from Discord.
       - **3.2.2. Content Import:** Associate imported messages with their respective authors on Discourse.
   - **3.3. Recreate Roles and Access Levels**
     - Replicate Discord roles on Discourse, ensuring appropriate access levels and permissions.

### 4. **User Migration Strategy**
   - **4.1. Communication of New Platform and Terms**
     - Send an email to all current Discord users about the new platform and updated community guidelines.
     - Include instructions on how to create a Discourse account.
   - **4.2. Account Creation Process**
     - **Option A:** Encourage users to manually create accounts on Discourse with a specific action required to continue using the community (e.g., agreeing to new terms).
     - **Option B:** Automate account creation and require users to log in using Discord, linking their accounts.
   - **4.3. Initial Platform Setup**
     - Initially, limit content on the new Discourse platform to essential information like the new guidelines.
     - Gradually introduce more content as user migration progresses.
     - Monitor user engagement and provide support for those who need help with the transition.

### 5. **Verification and Follow-Up**
   - **5.1. Verify Migration Feasibility**
     - Check with Discourse support if forced linking of Discord accounts upon first login is possible.
   - **5.2. Post-Migration Support**
     - Offer technical support for users during the migration.
     - Monitor the community for any issues and address them promptly.

### 6. **Final Actions Before Deleting Discord Community**
   - Ensure all necessary content has been backed up and imported into Discourse.
   - Verify that all users have successfully migrated to Discourse.
   - Gradually phase out the Discord server, giving users time to adjust to the new platform.

### Tools and Resources
- **VaultCord**: Use this bot to automate backups and exports from Discord.
- **GitHub Import Scripts**: Utilize the official Discourse import scripts for content and user migration.

This list should give you a comprehensive approach to transitioning your community from Discord to Discourse while ensuring minimal disruption and maintaining user engagement.
