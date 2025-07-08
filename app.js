// const projectUrl = "https://zgdyuwvvjvpnjiutumsz.supabase.co"
// const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZHl1d3Z2anZwbmppdXR1bXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg2MTUsImV4cCI6MjA2NzAxNDYxNX0.kbDfl4P6K-9YV-UBFEvCSW3YoKwQDOZ1IGhggFVzsvw"

// const { createClient } = supabase;
// const client = createClient(projectUrl, projectKey)
// console.log(createClient);

// console.log(client);

// const signUpBtn = document.getElementById("signup-btn")

// signUpBtn.addEventListener("click", () => {
//     const signupEmail = document.getElementById("signup-email").value;
//     const signupPass = document.getElementById("signup-password").value;

//     async function signupUser() {
//         const { data, error } = await client.auth.signUp(
//             {
//                 email: signupEmail,
//                 password: signupPass
//             }
//         )
//         if (error) {
//             console.log(error.message);

//         }
//         else {
//             console.log(data);

//         }
//     }
//     signupUser()
// })

// signup functionality
// const signupBtn = document.getElementById("signupBtn")
// signupBtn && signupBtn.addEventListener("click", function () {
//     const signupEmail = document.getElementById("signup-email")
//     const signupPass = document.getElementById("signup-password")

//     if (signupEmail && signupPass) {
//         console.log(signupEmail, signupPass)

//         async function sigupUser() {
//             try {
//                 const loader = document.getElementById("loader")
//                 loader.style.display = "block"
//                 const { data, error } = await client.auth.signUp({
//                     email: signupEmail.value,
//                     password: signupPass.value,
//                 })
//                 loader.style.display = "none"
//                 console.log(data)

//                 window.location.href = "login.html"
//             }
//             catch (error) {
//                 console.log(error.message)

//                 switch (error.message) {
//                     case "Unable to validate email address: invalid format":
//                         console.log("hello")
//                         alert("please give us the right format of email address");
//                         break;
//                 }

//             }

//         }
//         sigupUser()
//     }

//     else {
//         alert("please fill fields")
//     }
// })



//login functionality
// const loginBtn = document.getElementById("loginBtn")
// loginBtn && loginBtn.addEventListener("click", function () {
//     const loginEmail = document.getElementById("login-email")
//     const loginPass = document.getElementById("login-password")

//     if (loginEmail && loginPass) {
//         console.log(loginEmail, loginPass)

//         async function loginUser() {
//             try {
//                 const loader = document.getElementById("loader")
//                 loader.style.display = "block"
//                 const { data, error } = await client.auth.signInWithPassword({
//                     email: loginEmail.value,
//                     password: loginPass.value,
//                 })
//                 loader.style.display = "none"
//                 if (error) {
//                     console.log(error.message)
//                 }
//                 else {
//                     console.log(data)
//                     alert("user created successsfully")
//                 }

//                 window.location.href = "home.html"
//             }
//             catch (error) {
//                 console.log(error)
//                 console.log(error.message)

//                 switch (error.message) {
//                     case "Unable to validate email address: invalid format":
//                         console.log("hello")
//                         alert("please give us the right format of email address");
//                         break;
//                 }

//             }

//         }
//         loginUser()

//     }

//     else {
//         alert("please fill fields")
//     }

// })


// Supabase initialization
// const projectUrl = "https://zgdyuwvvjvpnjiutumsz.supabase.co";
// const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZHl1d3Z2anZwbmppdXR1bXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg2MTUsImV4cCI6MjA2NzAxNDYxNX0.kbDfl4P6K-9YV-UBFEvCSW3YoKwQDOZ1IGhggFVzsvw";

// const { createClient } = supabase;
// const client = createClient(projectUrl, projectKey);

// // Common functions
// function showLoader() {
//     const loader = document.getElementById("loader");
//     if (loader) loader.style.display = "flex";
// }

// function hideLoader() {
//     const loader = document.getElementById("loader");
//     if (loader) loader.style.display = "none";
// }

// function showError(message) {
//     alert(message); // In a real app, you'd show a prettier error message
// }

// // Signup functionality
// const signupForm = document.getElementById("signup-form");
// if (signupForm) {
//     signupForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = document.getElementById("signup-email").value;
//         const password = document.getElementById("signup-password").value;

//         if (!email || !password) {
//             showError("Please fill all fields");
//             return;
//         }

//         try {
//             showLoader();
//             const { data, error } = await client.auth.signUp({
//                 email,
//                 password,
//             });

//             if (error) throw error;

//             alert("Signup successful! Please check your email for verification.");
//             window.location.href = "login.html";
//         } catch (error) {
//             console.error("Signup Error:", error);
//             showError(error.message || "Signup failed. Please try again.");
//         } finally {
//             hideLoader();
//         }
//     });
// }

// // Login functionality
// const loginForm = document.getElementById("login-form");
// if (loginForm) {
//     loginForm.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const email = document.getElementById("login-email").value;
//         const password = document.getElementById("login-password").value;

//         if (!email || !password) {
//             showError("Please fill all fields");
//             return;
//         }

//         try {
//             showLoader();
//             const { data, error } = await client.auth.signInWithPassword({
//                 email,
//                 password,
//             });

//             if (error) throw error;

//             window.location.href = "home.html";
//         } catch (error) {
//             console.error("Login Error:", error);
//             showError(error.message || "Login failed. Please check your credentials.");
//         } finally {
//             hideLoader();
//         }
//     });
// }

// // Google Auth function
// async function handleGoogleAuth() {
//     try {
//         showLoader();
//         const { data, error } = await client.auth.signInWithOAuth({
//             provider: 'google',
//             options: {
//                 redirectTo: window.location.origin + "/home.html"
//             }
//         });

//         if (error) throw error;
//     } catch (error) {
//         console.error("Google Auth Error:", error);
//         showError("Google authentication failed. Please try again.");
//     } finally {
//         hideLoader();
//     }
// }

// // Attach Google Auth to buttons
// const googleSignInBtn = document.getElementById("googleSignInBtn");
// const googleLoginBtn = document.getElementById("googleLoginBtn");

// if (googleSignInBtn) googleSignInBtn.addEventListener("click", handleGoogleAuth);
// if (googleLoginBtn) googleLoginBtn.addEventListener("click", handleGoogleAuth);

// // Home page functionality
// const userEmailSpan = document.getElementById("user-email");
// if (userEmailSpan) {
//     client.auth.getUser().then(({ data: { user } }) => {
//         if (user) {
//             userEmailSpan.textContent = user.email;
//         } else {
//             window.location.href = "login.html";
//         }
//     });
// }

// // Logout functionality
// const logoutBtn = document.getElementById("logoutBtn");
// if (logoutBtn) {
//     logoutBtn.addEventListener("click", async () => {
//         try {
//             const { error } = await client.auth.signOut();
//             if (error) throw error;
//             window.location.href = "login.html";
//         } catch (error) {
//             console.error("Logout Error:", error);
//             showError("Logout failed. Please try again.");
//         }
//     });
// }

// // Check auth state on page load
// client.auth.onAuthStateChange((event, session) => {
//     if (event === "INITIAL_SESSION" && !session) {
//         // User is not logged in
//         if (window.location.pathname.includes("home.html")) {
//             window.location.href = "login.html";
//         }
//     }
// });




const projectUrl = "https://zgdyuwvvjvpnjiutumsz.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZHl1d3Z2anZwbmppdXR1bXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg2MTUsImV4cCI6MjA2NzAxNDYxNX0.kbDfl4P6K-9YV-UBFEvCSW3YoKwQDOZ1IGhggFVzsvw";

const { createClient } = supabase;
const client = createClient(projectUrl, projectKey);

// Common functions
function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "flex";
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
}

function showError(message) {
    alert(message); // In a real app, you'd show a prettier error message
}

// Signup functionality
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        if (!email || !password) {
            showError("Please fill all fields");
            return;
        }

        try {
            showLoader();
            const { data, error } = await client.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            alert("Signup successful! Please check your email for verification.");
            window.location.href = "login.html";
        } catch (error) {
            console.error("Signup Error:", error);
            showError(error.message || "Signup failed. Please try again.");
        } finally {
            hideLoader();
        }
    });
}

// Login functionality
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (!email || !password) {
            showError("Please fill all fields");
            return;
        }

        try {
            showLoader();
            const { data, error } = await client.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            window.location.href = "home.html";
        } catch (error) {
            console.error("Login Error:", error);
            showError(error.message || "Login failed. Please check your credentials.");
        } finally {
            hideLoader();
        }
    });
}

// Google Auth function
async function handleGoogleAuth() {
    try {
        showLoader();
        const { data, error } = await client.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin + "/home.html"
            }
        });

        if (error) throw error;
    } catch (error) {
        console.error("Google Auth Error:", error);
        showError("Google authentication failed. Please try again.");
    } finally {
        hideLoader();
    }
}

// Attach Google Auth to buttons
const googleSignInBtn = document.getElementById("googleSignInBtn");
const googleLoginBtn = document.getElementById("googleLoginBtn");

if (googleSignInBtn) googleSignInBtn.addEventListener("click", handleGoogleAuth);
if (googleLoginBtn) googleLoginBtn.addEventListener("click", handleGoogleAuth);

// Home page functionality
const userEmailSpan = document.getElementById("user-email");
if (userEmailSpan) {
    client.auth.getUser().then(({ data: { user } }) => {
        if (user) {
            userEmailSpan.textContent = user.email;
        } else {
            window.location.href = "login.html";
        }
    });
}

// Logout functionality
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
        try {
            const { error } = await client.auth.signOut();
            if (error) throw error;
            window.location.href = "login.html";
        } catch (error) {
            console.error("Logout Error:", error);
            showError("Logout failed. Please try again.");
        }
    });
}

// Check auth state on page load
client.auth.onAuthStateChange((event, session) => {
    if (event === "INITIAL_SESSION" && !session) {
        // User is not logged in
        if (window.location.pathname.includes("home.html")) {
            window.location.href = "login.html";
        }
    }
});