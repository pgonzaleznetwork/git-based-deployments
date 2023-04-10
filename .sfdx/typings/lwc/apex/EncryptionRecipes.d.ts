declare module "@salesforce/apex/EncryptionRecipes.encryptAES256WithManagedIVRecipe" {
  export default function encryptAES256WithManagedIVRecipe(param: {dataToEncrypt: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.decryptAES256WithManagedIVRecipe" {
  export default function decryptAES256WithManagedIVRecipe(param: {dataToDecrypt: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.encryptAES256Recipe" {
  export default function encryptAES256Recipe(param: {dataToEncrypt: any, initializationVector: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.decryptAES256Recipe" {
  export default function decryptAES256Recipe(param: {dataToDecrypt: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.generateSHA512HashRecipe" {
  export default function generateSHA512HashRecipe(param: {dataToHash: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.checkSHA512HashRecipe" {
  export default function checkSHA512HashRecipe(param: {hash: any, dataToCheck: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.generateHMACSHA512Recipe" {
  export default function generateHMACSHA512Recipe(param: {dataToHmac: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.checkHMACSHA512Recipe" {
  export default function checkHMACSHA512Recipe(param: {hmac: any, dataToCheck: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.generateRSASHA512DigitalSignatureRecipe" {
  export default function generateRSASHA512DigitalSignatureRecipe(param: {dataToSign: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.checkRSASHA512DigitalSignatureRecipe" {
  export default function checkRSASHA512DigitalSignatureRecipe(param: {signature: any, dataToCheck: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.encryptAES256AndGenerateRSASHA512DigitalSignRecipe" {
  export default function encryptAES256AndGenerateRSASHA512DigitalSignRecipe(param: {dataToEncryptAndSign: any}): Promise<any>;
}
declare module "@salesforce/apex/EncryptionRecipes.decryptAES256AndCheckRSASHA512DigitalSignRecipe" {
  export default function decryptAES256AndCheckRSASHA512DigitalSignRecipe(param: {signature: any, dataToDecryptAndCheck: any}): Promise<any>;
}
