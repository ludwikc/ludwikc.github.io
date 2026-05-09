# Complete Airtable CRM Structure: Table and Field Summary

Here's a comprehensive breakdown of all tables and fields for your Airtable CRM implementation. I've organized them by table and included field types and special considerations.

## 1. CONTACTS Table

This is your central people repository - the backbone of your CRM.

|Field Name|Field Type|Description|
|---|---|---|
|First Name|Single line text||
|Last Name|Single line text||
|Email|Email|_Primary sync field for Mailerlite_|
|Phone|Phone number||
|Type|Single select|Individual/Corporate Contact|
|Status|Single select|Lead/Active Customer/Former Customer|
|Source|Single select|How they found you|
|VAT ID|Single line text|For EU business requirements|
|Lead Score|Formula|Calculated engagement metric|
|Tags|Multiple select|For segmentation (courses, coaching, etc.)|
|Created Date|Date|Automatically set to now|
|Last Purchase Date|Date|From related purchases|
|Total Purchase Value|Rollup|SUM of all purchases|
|Course Revenue|Rollup|SUM of course purchases|
|Coaching Revenue|Rollup|SUM of coaching purchases|
|Consulting Revenue|Rollup|SUM of consulting services|
|Purchase Frequency|Formula|Purchases per time period|
|Products Owned|Count|Number of purchases|
|Coaching Completion Rate|Formula|% of completed coaching sessions|
|Engagement Score|Formula|Combined engagement metric|
|Notes|Long text||
|Related Purchases|Linked record|Link to PURCHASES table|
|Related Coaching Sessions|Linked record|Link to COACHING_SESSIONS table|
|Related Corporate Roles|Linked record|Link to CORPORATE_CONTACTS table|
|Related Donations|Linked record|Link to DONATIONS table|
|Communication Log|Linked record|Link to COMMUNICATION_LOG table|

## 2. COMPANIES Table

For tracking corporate clients and accounts.

|Field Name|Field Type|Description|
|---|---|---|
|Company Name|Single line text||
|Industry|Single select||
|Website|URL||
|VAT ID|Single line text|Required for EU businesses|
|Main Contact|Lookup|Primary contact from CONTACTS table|
|Company Size|Single select|Small/Medium/Large/Enterprise|
|Created Date|Date|Automatically set to now|
|Address|Long text|Company address|
|City|Single line text||
|Country|Single select||
|Notes|Long text||
|Contacts|Linked record|Link to CORPORATE_CONTACTS table|
|Projects|Linked record|Link to CONSULTING_PROJECTS table|
|Donations|Linked record|Link to DONATIONS table|
|Total Project Value|Rollup|SUM of all project values|
|Active Projects|Count|Number of current projects|

## 3. PRODUCTS Table

All your service offerings in one place.

|Field Name|Field Type|Description|
|---|---|---|
|Name|Single line text|Product/service name|
|Type|Single select|Course/Coaching Program/Consulting Service|
|Tier|Single select|Standard/Premium|
|Price|Currency||
|Description|Long text||
|Status|Single select|Active/Inactive|
|Number of Sessions|Number|For coaching programs|
|Duration (weeks)|Number|Program/service duration|
|Created Date|Date||
|Last Updated|Date||
|Related Purchases|Linked record|Link to PURCHASES table|
|Purchase Count|Count|Number of times purchased|
|Total Revenue|Rollup|SUM of all purchase amounts|

## 4. PURCHASES Table

Tracks all customer purchases across your offerings.

|Field Name|Field Type|Description|
|---|---|---|
|Customer|Linked record|Link to CONTACTS table|
|Product|Linked record|Link to PRODUCTS table|
|Purchase Date|Date||
|Amount|Currency|Purchase price|
|Status|Single select|Active/Completed/Cancelled|
|Invoice Number|Single line text||
|Payment Status|Single select|Paid/Pending/Overdue|
|Payment Method|Single select|Credit Card/Bank Transfer/etc.|
|Notes|Long text||

## 5. COACHING_SESSIONS Table

Tracks individual coaching sessions and progress.

|Field Name|Field Type|Description|
|---|---|---|
|Client|Linked record|Link to CONTACTS table|
|Related Product|Linked record|Link to PRODUCTS table|
|Session Date|Date & time||
|Status|Single select|Scheduled/Completed/Cancelled/No-show|
|Session Number|Number|Current session number|
|Total Sessions|Number|Total in program|
|Progress|Formula|% complete (Session Number/Total)|
|Notes/Summary|Long text|Session notes|
|Follow-up Items|Long text|Action items|
|Follow-up Date|Date|When to check progress|

## 6. CONSULTING_PROJECTS Table

Manages your corporate consulting engagements.

|Field Name|Field Type|Description|
|---|---|---|
|Project Name|Single line text||
|Client|Linked record|Link to COMPANIES table|
|Project Owner|Linked record|Link to TEAM_MEMBERS table|
|Stage|Linked record|Link to PIPELINE_STAGES table|
|Start Date|Date||
|End Date|Date||
|Status|Single select|Active/Completed/On Hold/Cancelled|
|Budget|Currency|Project value|
|Invoiced Amount|Currency|Amount billed to date|
|Remaining Budget|Formula|Budget - Invoiced Amount|
|Completion %|Number|Project progress|
|Description|Long text|Project scope|
|Notes|Long text||
|Related Contacts|Linked record|Link to CORPORATE_CONTACTS|
|Communication Log|Linked record|Link to COMMUNICATION_LOG|

## 7. PIPELINE_STAGES Table

Defines your sales pipeline for consulting projects.

|Field Name|Field Type|Description|
|---|---|---|
|Stage Name|Single line text|e.g., Lead/Discovery/Proposal/etc.|
|Stage Order|Number|Sequence in pipeline|
|Description|Long text||
|Probability|Percentage|Likelihood of closing|
|Average Days in Stage|Number|Typical duration|
|Projects in Stage|Count|Number of current projects|
|Value in Stage|Rollup|SUM of project values in stage|

## 8. TEAM_MEMBERS Table

Your internal team tracking.

|Field Name|Field Type|Description|
|---|---|---|
|Name|Single line text||
|Email|Email||
|Role|Single select||
|Department|Single select||
|Owned Projects|Linked record|Link to CONSULTING_PROJECTS|
|Communications|Linked record|Link to COMMUNICATION_LOG|
|Active Projects Count|Count|Number of active projects|
|Projects Value|Rollup|SUM of owned project values|

## 9. CORPORATE_CONTACTS Table

Junction table connecting people to companies.

|Field Name|Field Type|Description|
|---|---|---|
|Contact|Linked record|Link to CONTACTS table|
|Company|Linked record|Link to COMPANIES table|
|Job Title|Single line text||
|Department|Single line text||
|Decision Maker|Checkbox|Yes/No|
|Primary Contact|Checkbox|Main contact for company|
|Notes|Long text|Role-specific notes|
|Related Projects|Linked record|Link to CONSULTING_PROJECTS|

## 10. DONATIONS Table

For your non-profit foundation tracking.

|Field Name|Field Type|Description|
|---|---|---|
|Donor|Linked record|Link to CONTACTS or COMPANIES|
|Donor Type|Single select|Individual/Corporate|
|Donation Date|Date||
|Amount|Currency||
|Campaign|Single select|Specific fundraising effort|
|Frequency|Single select|One-time/Monthly/Annual|
|Recurring|Checkbox|Is this a recurring donation?|
|Notes|Long text||
|Tax Receipt Sent|Checkbox||
|Thank You Sent|Checkbox||

## 11. COMMUNICATION_LOG Table

Comprehensive interaction tracking.

|Field Name|Field Type|Description|
|---|---|---|
|Contact|Linked record|Link to CONTACTS table|
|Date/Time|Date & time||
|Type|Single select|Email/Call/Meeting/Message|
|Team Member|Linked record|Who conducted the communication|
|Notes|Long text||
|Related To|Linked record|Can link to Projects/Products|
|Follow-up Required|Checkbox||
|Follow-up Date|Date|When to follow up|
|Follow-up Notes|Long text||

## Implementation Notes for Mailerlite Integration

For future Mailerlite integration, here are the key email-based fields to consider:

1. The primary `Email` field in CONTACTS table will be your main sync point
2. Use the `Tags` field in CONTACTS to determine Mailerlite groups
3. Consider creating these additional fields for marketing automation:
    - Marketing Consent (Checkbox)
    - Email Subscription Status (Single select: Subscribed/Unsubscribed)
    - Last Campaign Sent (Date)
    - Email Open Rate (Percentage)

These fields will allow you to effectively segment your contacts in Mailerlite based on their relationship with your various business offerings.

For optimum implementation, I suggest starting with the CONTACTS, PRODUCTS, and PURCHASES tables first to establish your core customer data, then expand to the more specialized tables as your needs grow.