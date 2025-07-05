const projectUrl = "https://zgdyuwvvjvpnjiutumsz.supabase.co"
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZHl1d3Z2anZwbmppdXR1bXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg2MTUsImV4cCI6MjA2NzAxNDYxNX0.kbDfl4P6K-9YV-UBFEvCSW3YoKwQDOZ1IGhggFVzsvw"

const { createClient } = supabase;
const client = createClient(projectUrl, projectKey)
console.log(createClient);

console.log(client);

const signUpBtn = document.getElementById("signup-btn")

signUpBtn.addEventListener("click", () => {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPass = document.getElementById("signup-password").value;

    async function signupUser() {
        const { data, error } = await client.auth.signUp(
            {
                email: signupEmail,
                password: signupPass
            }
        )
        if (error) {
            console.log(error.message);

        }
        else {
            console.log(data);

        }
    }
    signupUser()
})





