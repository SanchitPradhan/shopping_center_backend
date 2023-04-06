module.exports = {
    formatString: function (name) {
        let NameData = name.replace(/[^a-zA-Z0-9]/g, "");
        let TRIMNAME = NameData.replace(/\s/g, "");
        let UPPER_NAME = TRIMNAME.toUpperCase();
        return UPPER_NAME;
      }
}