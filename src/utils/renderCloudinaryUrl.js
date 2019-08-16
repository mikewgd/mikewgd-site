const transformationMapping = {
  width: 'w',
  height: 'h',
  crop: 'c',
  aspect_ratio: 'ar',
  fetch_format: 'f',
  quality: 'q',
  background: 'b',
};

export const renderUrl = (
  imageUrl,
  transforms = {
    aspect_ratio: '16:9',
    background: 'rgb:F4F4F4',
    fetch_format: 'auto',
    crop: 'pad',
    width: 800,
  }
) => {
  const transformations = [];
  const [base, image] = imageUrl.split('upload/');
  const properties = Object.keys(transforms);

  properties.map(prop => {
    const property = transformationMapping[prop];
    const value = transforms[prop];
    return transformations.push(`${property}_${value}`);
  });

  return `${base}upload/${transformations.join(',')}/${image.replace('.png', '')}`;
};
