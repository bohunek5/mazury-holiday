import * as fs from 'fs';

// Since the file is a TS file, let's parse it as a string to find the 'pl' object,
// or we can just use the typescript compiler API to extract it.
// An easier way is just to compile the file:
