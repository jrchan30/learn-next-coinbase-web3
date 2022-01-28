import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '5rcx0o03',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skOjqKkPuJ17y0zzo2FH8LfARgdBZxacYArgeIeNXlvNyHpMXyOmbrUHJvRf2m6FvBBho27xswOK4YrULaGXweaqzEClTnZ0eLQLgQy72XOwGBkF5P6D9cEV2ci3JxkCaQHxbHvjMYoOyaZM9B5ksJ9SLYoGu2a3Qr9ylcdRcHypsVEcVOz1',
  useCdn: false,
});
