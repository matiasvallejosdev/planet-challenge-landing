import Header from "../../components/header/Header";


export default function DefaultLayout({ children }) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}
