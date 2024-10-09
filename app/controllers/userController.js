exports.getUserProfile = (req, res) => {
    // Example logic for fetching user profile
    res.json({
      message: 'User profile data',
      user: {
        id: '123',
        name: 'John Doe',
      },
    });
  };
  