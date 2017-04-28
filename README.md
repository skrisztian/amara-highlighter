# amara-highlighter

Javascript to extend Amara.org's translation interface with color-coding

Amara.org provides an interface to translate subtitles for online videos. In their legacy interface they were lacking a tool which could warn translators in a simple way, if a subtitle exceeded a certain length, or was too long to read given it's limited time of appeareance. A rule of thumb for subtitling is that any given line should not be longer than 42 characters and reading speed should be below 21 characters/second.

This tool extends Amara's translation interface's functionality, by warning with color coding, if any of those rules are violated. When running it:
* it colors subtitle lines to red if the reading speed is more than 21 chars/sec
* it colors the background of subtitles to yellow, where line length is greater than 42 chars

The script should be installed in the browser as a bookmarklet. That is: create a new bookmark (most conveniently on the bookmarks bar) then by editing its properties, copy and paste into the URL filed the source code of the Javascript file.

When you want to run it, just click on the bookmark button/link in your browser.
