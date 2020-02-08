/**
 * @param {number} coin Original price indication
 */
export const formatPrice = (coin: number) => {
  return coin.toLocaleString('zh-TW',{style:'currency',currency: 'TWD'});
};
