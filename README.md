ßRun this command `npm run tsc`. It will throw the error:

> error TS2590: Expression produces a union type that is too complex to represent.

Install Typescript v6 with the command `npm add typescript@6` and run the same command. The error is gone.

Also, if you comment out the augmentation of the `TypographyOwnProps` interface, the issue is also gone.