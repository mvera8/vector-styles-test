export const loadVector = ({ theme, campaignId, selector, customStyles, customSheet, themeOptions }) => {
  const vectorObject = window.vector;
  vectorObject.config({ theme });

  const v = vectorObject.new({ campaignId, selector, customStyles, customSheet, themeOptions });
  v.render();

  return () => v.unmount();
}
