

export const buildValidationState = async responseData =>(await responseData);


export const getErrorMessage = async responseData => {
    console.log(buildValidationState(responseData));
    const entries = Object.entries(buildValidationState(responseData));
    console.log(entries)
    if (entries.length === 0) {
        return 'Something went wrong.';
    }
   
    const [key, value] = entries[0];
    if (key === '_error') {
        return `Error : ${value[0]}`;
    }

    return `Error for ${key}: ${value[0]}`;
};