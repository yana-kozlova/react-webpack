export const Button = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        boxShadow: 'none',
      },
      containedPrimary: {
        color: 'white',
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: '#1565c0',
        },
      },
      containedSecondary: {
        color: 'white',
        backgroundColor: '#f50057',
        '&:hover': {
          backgroundColor: '#c51162',
        },
      },
      outlined: {
        // borderWidth: '2px',
      },
      outlinedPrimary: {
        color: '#1976d2',
        borderColor: '#1976d2',
        '&:hover': {
          borderColor: '#1565c0',
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
        },
      },
      outlinedSecondary: {
        color: '#f50057',
        borderColor: '#f50057',
        '&:hover': {
          borderColor: '#c51162',
          backgroundColor: 'rgba(245, 0, 87, 0.04)',
        },
      },
    },
  },
};
