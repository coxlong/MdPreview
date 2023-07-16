import { generateUrl } from '@nextcloud/router';

OCA.Files.fileActions.registerAction({
  name: 'mdAction',
  displayName: t('mdpreview', '查看'),
  mime: 'text/markdown',
  permissions: OC.PERMISSION_READ,
  iconClass: 'icon-file',
  actionHandler: (name, context) => {
    window.location.href = generateUrl('/apps/mdpreview/preview?fileID=' + context.fileInfoModel.attributes.id);
    // window.open(generateUrl('/apps/mdpreview/preview?fileID=' + context.fileInfoModel.attributes.id), '_blank');
  },
});
