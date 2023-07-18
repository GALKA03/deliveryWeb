const fetchRegister = async ({ name, email, password }) => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }), // Pass an object with properties
    });

    if (!res.ok) {
      throw new Error("Failed to create account");
    }

    const responseData = await res.json();

    if (!responseData || typeof responseData !== "object") {
      throw new Error("Invalid response data from register");
    }

    console.log("User admin created successfully", responseData);

    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchRegister;


