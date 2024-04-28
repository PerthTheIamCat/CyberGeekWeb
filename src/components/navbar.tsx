import React from 'react'

const navbar = () => {
  return (
    <>
<nav className="bg-zinc-800 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap md:flex-nowrap">
		<div className="text-indigo-500 md:order-1">
			<div>LOGO</div>
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
				<li className="md:px-4 md:py-2 text-indigo-500"><a href="#">สมัครเข้าชมรม</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">เกี่ยวกับเรา</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">ข่าวสาร</a></li>
				<li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">ติตต่อเรา</a></li>
			</ul>
		</div>
		<div className="order-2 md:order-3">
			<button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <span>เข้าสู่ระบบ</span>
            </button>
		</div>
	</div>
</nav>
   
    </>
  )
}

export default navbar