

The "confirmation" process could be automated if you use 2 different groups; one that includes all your already active Subscribers, and one that includes new sign ups -- you'd be linking this last one to the Form in question.

You'd need to create an automation that uses a condition step to check group membership: [https://www.mailerlite.com/help/how-to-use-automation-steps#new/condition-step](https://www.mailerlite.com/help/how-to-use-automation-steps#new/condition-step)

It would be: Trigger>email>delay step> condition step.

The condition step would check if the email was clicked. If it wasn't clicked, you'd be using another condition step to check whether or not they are already subscribers.

If it was clicked, you would add them to your Webinar group.

If they are not part of the "subscribers" group, you'd be Unsubscribing them.

if they are part of the "subscribers" group, you'd be adding them to your Webinar group.