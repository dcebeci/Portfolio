import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'d48df4bg',
    dataset: 'production',
    apiVersion: '',
    userCdn: true,
    token: '',

});

const builder = imgUrlBuilder(Client);

export const urlFor = (source) => builder.image(source)