export const loginWithGoogle = (googleId, name, email, imageUrl) => ({
    type: 'login',
    payload: {
        googleId,
        name,
        email,
        imageUrl
    }
});