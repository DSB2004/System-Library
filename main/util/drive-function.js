const nodeDiskInfo = require('node-disk-info');

const getDriveData = async () => {
    try {
        const disks = await nodeDiskInfo.getDiskInfo()
        return disks
    }
    catch (err) {
        throw err;
    }
}

module.exports = { getDriveData: getDriveData }