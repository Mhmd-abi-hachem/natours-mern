export async function loginApi({ email, password }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}users/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to login. Please try again.");
  }

  const loginData = await response.json();

  return loginData;
}

export async function signupApi({ name, email, password, confirmPassword }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}users/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
    }),
  });
  if (!response.ok) {
    const error = await response.json();

    if (error?.errorResponse?.code === 11000) {
      throw new Error("Email already exists");
    }

    throw new Error(
      error.message || "Failed to create account. Please try again."
    );
  }

  const result = await response.json();

  const signupData = await result.data;

  return signupData;
}

export async function authStatusApi() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}users/is-logged-in`,
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch authentication status");
  }

  const authData = await response.json();
  return authData;
}

export async function logoutApi() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}users/logout`, {
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Could not log you out. Please try again."
    );
  }

  const logoutData = await response.json();
  return logoutData;
}

export async function deleteUserApi() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}users/deleteMe`,
    {
      credentials: "include",
      method: "DELETE",
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Failed to delete your account. Please try again."
    );
  }

  const deleteData = await response.json();
  return deleteData;
}

export async function updateAccountApi({ name, email }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}users/updateMe`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Failed to update your account. Please try again."
    );
  }

  const updateAccountData = await response.json();
  return updateAccountData;
}

export async function updatePasswordApi({
  passwordCurrent,
  passwordConfirm,
  password,
}) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}users/updateMyPassword`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ passwordCurrent, password, passwordConfirm }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Failed to update your password. Please try again."
    );
  }

  const updatePasswordData = await response.json();
  return updatePasswordData;
}
