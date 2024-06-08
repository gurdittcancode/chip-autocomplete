# Chips auto complete task (HyreSnap)

## This project was built by Gurditt Singh.

My thought process behind this task was that I could have the user simply type in an input field. Using styling, I could make it look like the chips were present inside the input field itself :P

Then, on every key-press, I loop through the tags array and find the tags that have this input value as a substring, and push those tags to the matching tags array. Then I simply show that matching tags array.

While checking for a match, I make sure to check the tag with matching substring isn't already inside the selected array.

Delete case is handled in a simple and straightforward way.
