Run this command `npm run tsc`. It will throw the error:

> src/main.tsx:12:13 - error TS2590: Expression produces a union type that is too complex to represent.
>
> 12 interface ListItemTextProps {

Install Typescript v6 with the command `npm add typescript@6` and run the same command. The error is gone.

Also, if you comment out the augmentation of the `TypographyOwnProps` interface, the issue is also gone.
