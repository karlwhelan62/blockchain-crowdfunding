increaseTime = (seconds) => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send({ method: 'evm_increaseTime', params: [seconds] },
    (err, result) => {
      if (err) { return reject(err) }
      return resolve(result)
    })
  })
}

mineBlock = () => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send({ method: 'evm_mine' },
    (err, result) => {
      if (err) { return reject(err) }
      return resolve(result)
    })
  })
}

windClockForward = async (seconds) => {
  await increaseTime(seconds);
  await mineBlock();

  return Promise.resolve(web3.eth.getBlock('latest'));
}

module.exports = {
  increaseTime,
  mineBlock,
  windClockForward
}
