const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withAdmin = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
    res.status(401)
    return res.send('Not Allowed')
  } else {
  next()
  }
}
};
module.exports = withAuth, withAdmin;
