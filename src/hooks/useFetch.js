// Function to get data
export const fetchGet = async function(url) {
    
    try {

        const request = await fetch(url);
        const response = await request.json();

        return await response;
    
    } catch(error) {
        return error
    }
}

export const fetchPost = async function(url, body) {

    try {
        const request = await fetch(url, {
            method: 'POST',
            // headers: {"content-type": "application/json; charset=utf-8"},
            body: body,
        });
    
        const response = await request.json();
        return response;
    
    } catch(error) {
        return error;
    }
}

export const fetchDelete = async function(url) {
    try {

        const request = await fetch(url, {method: 'DELETE'});
        const response = await request.json();

        return response;
    
    } catch(error) {
        return error
    }
}

export const fetchPut = async function(url, body) {

    try {
        const request = await fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(body)
        });
    
        const response = await request.json();
        return response;
    
    } catch(error) {
        return error;
    }
}