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
  
  for (var prop in transforms) {
    const property = transformationMapping[prop];
    const value = transforms[prop];
    transformations.push(`${property}_${value}`)
  }

  return `${base}upload/${transformations.join(',')}/${image.replace('.png', '')}`
}