const links = require('../models/navdata');


exports.sendLinks = () => {
    const navlinks = links.getLinks();
    return navlinks;
}