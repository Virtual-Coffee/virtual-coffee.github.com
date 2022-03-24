---
layout: layouts/resources.njk
title: Contributor Guide
description: A Virtual Coffee guide to contributing to Open Source!
hero: 'svg/undraw_To_do_list_re_9nt7.svg'
heroHeader: 'Contributor Guide'
heroSubheader: 'A Virtual Coffee guide to contributing to Open Source!'
tags: memberresources
eleventyNavigation:
  key: ContributorGuide
  title: Contributor Guide
  excerpt: A Virtual Coffee guide to contributing to Open Source!
  parent: OSS
  order: 3
---

{% textContainer %}

# What is this document for?

{% leadText %}

{% endleadText %}

{% endtextContainer %}

{% textContainer 'white' %}

<h2>Table of Contents</h2>

${toc}

## Guide to writing issues

### Important things to know

There is not one good way to write issues. But there are things we want to avoid that either will discredit what we want or need, or won't help the person who will try to solve the issue.

Some important things to remember:

- **Provide facts.** An issue needs facts, which can include pictures, metrics, and more. It is easier to explain than just using words.
- **Describe the issue.** Follow any templates provided by the organization and/or asking yourself: What, Where, When, How and Why.
- **Don't solve the issue.** You are not expected to solve the issue. It happens of course, but it's important that the issue is clearly describes so that anyone can understand it without being in your head. 🙂

A suggested solution can be a good thing, especially to help the contributors who have less experience. When you're writing issues on a repository that isn't your own, you might not have all of the context to provide the best solution. This is why, although suggestions are appreciated, the maintainers have the final say in the solution and/or approach to the issue.

### Tips Before Writing an Issue

- Check the repository's ReadMe and Contributing guide (if they have one) to learn about how the maintainers expect communication and issues to be created. For example, some repositories require you to start a discussion before making an issue.
- Check current issues and closed issues to make sure no one has already written the issue you're going to write.
- If the organization has discussions enabled, check to see if it's been mentioned there as well.
- Check the Code of Conduct (commonly abbreviated as "COC") to make sure you participate in a way that's consistent with the organization's guidelines. Absence of a COC is unfortunate but doesn't mean people should be rude or disrespectful, even if the issue is _super frustrating_.

### How to write an issue?

Remember, there isn't one way to do it. We're going to walk you through how to create an issue, and reference the Virtual Coffee repository as an example.

1. Go to a repository. Let's check out [Virtual Coffee repository](https://github.com/Virtual-Coffee/virtualcoffee.io/)
2. Navigate to the [Issue Tab](https://github.com/Virtual-Coffee/virtualcoffee.io/issues/)
3. Check is if there is an [available template](https://github.com/Virtual-Coffee/virtualcoffee.io/issues/new/choose). You can find this by clicking the New Issue button on a repository.
   - In repos that are used to get a lot of traffic and issues, there is often an automatic template that appears when you create the issue. In that case, follow exactly the steps and requirements.
4. If there are no specific rules, here is a list of what's good to share in different types of issues:

#### Bug Issue

- Screenshots of the issue is in the UI, logs if it's a performance issue, or anything that proves the existence of the problem.
- **Your setup:** type of device and OS version, type of browser and version, any kind of setup that can help reproducing the problem.
- **Description:** Add the steps to reproduce the bug/behavior. Some things to consider:
  - what you think the correct behavior _should_ be.
  - the current behavior and how it differs.
  - the conditions required to produce the bug. For example, the buttons you clicked, the request you've made, etc.
- If you think of a solution to solve the problem, you can suggest something. Remember that your solution may not be the best solution for that specific issue/technology/repo...
- Links to any issue or discussion that relates to this issue.

#### Feature Issue

- **A Title:** Clear enough to identify in few words what the problem is about.
- **Context for the issue:** Describe the feature request.
- **Proposed Solution:** What do you think the solution should be and why? If you don't have a suggestion, that's fine too!
- **Alternatives Considered:** If you have thought about other solutions, what have you thought about and why did you think they weren't the best solution to the request?
- **Links:** Any issue or discussion that relates to this issue.

#### Documentation Change

- A title that is clear enough to identify in few words what the problem is about.
- Context for the issue: Describe the documentation request. For example, "I noticed an unclear explanation of how to install the software. I encountered an some issues myself."
- Proposed Solution: What do you think the solution should be and why? If you don't have a suggestion, that's fine too!

## Best practices for contributors

### Observing repository conventions

Most repositories will have certain conventions that you are expected to follow. These will differ from project to project, and can normally be found in the Readme or Contributing Guide. The areas covered will vary, but common things to look out for include:

- Code style guides
- General conventions for communicating
- Branch naming conventions
- Git workflows

### The work process

Most projects expect some form of discussion before a pull request is made. Expectations vary from project to project and can normally be found in the Readme or Contributing Guide.

Commonly, you should expect to either work on an existing issue, or to make a new issue and await approval from a maintainer before starting work. Many projects make use of labels such as `ready for dev` `not ready for dev` `will not do` to help you work out what issues you can work on. Unless the documentation says otherwise, you should normally comment on an issue that you would like to work on and ask to be assigned to it, and only start work when you have been assigned. This helps to avoid duplication of work and ensures that expectations are aligned. Unless the repository explicitly states that it accepts unsolicited pull requests, or you have good reason to believe your contribution will be accepted (perhaps you know the maintainer personally and they have said it is okay), you should not make unsolicited pull request to a project.

### Communicating with maintainers

Communication is key to working on open source. Most projects have conventions surrounding communication, and these should always be followed. Many projects primarily communicate via comments on issues or pull requests. Some projects have external groups such as Slack channels, a forum, IRC channels or email lists that where communication takes place and work is coordinated. If the project uses these there should be information about this on the Readme or Contributing Guide. If there is no specific information about where to communicate, you can probably assume that communication can take place via issues and pull requests.

Regardless of the tools used to communicate, there are certain things to keep in mind to keep communication effective and respectful, especially in a international online space.

- Always follow the Code of Conduct. Yes, always, even if you disagree with its contents or think it restricts your freedom of speech. The community agreed on these rules to govern the space, and as an entrant to the community you have a responsibility to follow these rules.
- Messages should be kept short and simple. It is often best to keep to 'one message, one topic', although there may be times when this not possible, for example if you need to respond to several points in another message, or you are going to be unavailable for a time and need to communicate several points at once. If you need to discuss several points in one message, put each point in a separate paragraph.
- Disagreement and debate are healthy, but it is important to keep the conversation respectful. Criticize the ideas people express, but don't criticize the person directly.
- Low context communication works best in international, cross-cultural spaces. Meanings should be explicit in the words you use, specific cultural references, cliches and sayings might not be understood by people from different cultures.

### View of work

You should approach open source work with the same professionalism as you would work for an employer, but remember that you are doing this in your spare time and that self-care is important. This means that you should take care over things such as code style, documentation, testing and such like just as you would your work for an employer, but it is okay if you cannot work at a fast pace. If timescales come up in open-source contributions, try to set reasonable expectations from the beginning. Otherwise, time should be taken to be fairly relaxed; for non-trivial issues it should not be expected that you complete the work to a given timescale.

{% endtextContainer %}