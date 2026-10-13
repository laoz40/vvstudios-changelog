# VV Studios changelog

Changelog for VV Studios website. [Link to repo](https://github.com/laoz40/vvstudios)

- Only include changes that affect the website for users.
- Don't include changes to the site's code or infrastructure, like refactors.
- Only include bug fixes or architectural changes if they are major and affect users, e.g. moving from static site to dynamic site (V2).
- Omit technical information, as the target audience is not developers.

- Each major release should be its own version number.
- Major releases are things that are massive features/changes that affect users, e.g. package bookings, editor workflows.
- For dates use when the PR was merged, or the date of the last commit.

## Prose

- Use the unslop skill for writing changelog

Priority 1: Make sure sentences are easy to read, grammatically correct, and understandable.
Priority 2: Keep changes short and clear, avoid making it look like massive paragraphs or sentences.

Don't reduce words and context that would help make the bullet point easier to understand in favour of making it less words and more concise.

### Changelog bullet points

- Write each bullet as a complete sentence with a clear subject and verb.
- Make it clear whether the release added something new, changed existing behavior, or removed something.
- Prefer describing the resulting behavior: "Clients can now...", "The booking form now shows...", or "The contact page now includes...".
- Name the affected page, feature, or user role so readers understand where the change applies.
- Include enough detail to explain what readers can do, see, or expect. For a new page, explain what it contains.
- For changes to existing behavior, explain what changed. Include the previous behavior when it helps readers understand the difference.
- Keep each bullet focused on one change. Usually one sentence is enough; use a second sentence if useful context would otherwise make it hard to read.
- Use plain, specific language. Avoid vague descriptions such as "improved experience" or "updated layout" without explaining the change.
- Only include details supported by the source material. Check the original change when context is missing.
- Prioritize clarity over brevity. Keep articles, verbs, and context that make the sentence easy to understand.
- Use bold text to emphasise the key words within each bullet point

### Grouping changes

- Group bullets within each release under short subheadings that name the affected area, such as "Website", "Bookings and payments", "Admin dashboard", or "Editor dashboard".
- Only include subheadings relevant to that release.
- Keep related changes together and list each change once.
- Skip subheadings when a release has only a few closely related changes.
- Each bullet should still make sense on its own, but avoid repeating context already clear from the subheading.
