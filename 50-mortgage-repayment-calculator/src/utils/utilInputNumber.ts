export default function utilInputNumber(value:string){
    const userValue = value.trim();
    const cleanValue = userValue.replace(/[^0-9]/g,"");
    return cleanValue;
}