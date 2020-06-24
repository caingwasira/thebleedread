const posts = [
    {
        id: 1,
        title: 'PUT A CUP IN IT!',
        author: 'Mandi',
        date: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
        post_description: 'Info, Menstrual cup, Menstrual products',
        body: 'This is the description of menstrual health and solutions.'+ 
              'For more details contact the owner of this site.'+
              'The menstrual cup is usually reusable which means it can be used multiple times over several months'+ 
              'some cups can be used for up to'
    },
    {
        id: 2,
        title: 'KEEP CALM AND PUT ON YOUR BIG GIRL PANTIES',
        author: 'Mandi',
        date: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
        post_description: 'Info, Menstrual cup, Menstrual products',
        body: `WHAT ARE PERIOD PANTS? Period pants are reusable menstrual underwear. 
               If worn correctly, period pants are leakproof. Period pants are made from a specifically 
               designed fabric that absorbs and wicks away liquid to keep you 
               dry and comfortable throughout your period`
    },
    {
        id: 3,
        title: 'WHAT THE HECK IS MENSTRUAL HEALTH AND HYGIENE ANYWAY?',
        author: 'Mandi',
        date: `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`,
        post_description: 'Info, Menstrual cup, Menstrual products',
        body: `What the heck is menstrual health and hygiene (MHH) anyway? 
               Globally considered a gender and human rights issue, menstrual health and hygiene 
               (MHH) is a reality for over half of the world’s population. Broadly, 
               MHH encompasses both the many factors that`
    }
];

exports.getPosts = () => {
    return posts;
}