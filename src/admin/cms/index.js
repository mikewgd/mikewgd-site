import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent({
  id: 'media',
  label: 'Media',
  fields: [
    {
      label: 'Thumb',
      name: 'mediaThumb',
      widget: 'image',
      media_library: {
        config: {
          multiple: false,
        },
      },
    },
    {
      label: 'Full Media',
      name: 'mediaFull',
      widget: 'file',
      media_library: {
        config: {
          multiple: false,
        },
      },
    },
    {
      label: 'Type',
      name: 'mediaType',
      widget: 'select',
      options: [
        'video',
        'article',
        'image',
      ],
    },
    {
      label: 'Caption',
      name: 'mediaCaption',
      widget: 'text',
    },
  ],

  pattern: /^<span class="entryMedia" thumb="(.*)" full="(.*)" type="(.*)">(.*)<\/span>/,

  fromBlock: match => ({
    mediaThumb: match[1],
    mediaFull: match[2],
    mediaType: match[3],
    mediaCaption: match[4],
  }),

  toBlock: obj => `<span class="entryMedia" thumb="${obj.mediaThumb}" full="${obj.mediaFull}" type="${obj.mediaType}">${obj.mediaCaption}</span>`,

  toPreview: obj => `<span class="entryMedia" thumb="${obj.mediaThumb}" full="${obj.mediaFull}" type="${obj.mediaType}">${obj.mediaCaption}</span>`,
});
