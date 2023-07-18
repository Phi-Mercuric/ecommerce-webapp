import { Link } from "react-router-dom"
import { Navbar, Footer } from "../../componenets"

export default function Login() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="mt-20 flex items-center justify-center">
          <div className="bg-secondary rounded-3xl font-poppins border border-black text-gray-300">
            <h2 className="text-2xl border-b-2 w-full border-gray-600 text-center p-5">Log In</h2>
            <form className="flex flex-col p-20">
              <input type="text"
                placeholder="Email"
                className="bg-transparent border-b border-gray-600 text-gray-300 mb-4"
              />
              <input type="password"
                placeholder="Password"
                className="bg-transparent border-b border-gray-600 text-gray-300 mb-4"
              />
              <button className="bg-gray-600 rounded-lg py-2 text-gray-300">Log In</button>
              <Link to="/register" className="text-orange-gradient mt-5">Register</Link>
            </form>
          </div>
        </div>
      </div >

      <div className="footer">
        <Footer />
      </div>
    </>
  )
}