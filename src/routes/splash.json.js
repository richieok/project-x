import images from "./_splash";

const contents = JSON.stringify(images.map(image => {
    return {
        url: image.url
    };
}));

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(contents);
}