import Header from '../Dashboard/Header/Header'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'
import Page4 from './Page4/Page4'

export default function Form() {
    return (
        <div className='flex flex-col justify-center z-0'>
            <Header />
            <div className='flex flex-row justify-center items-center p-4'>
                <p className='bg-black text-white border-black border border-solid rounded-full py-[1px] px-[10px]'>1</p>
                <span className='w-3 h-1 bg-black border border-black mx-[-1px]'></span>
                <p className='bg-white border-black border border-solid rounded-full py-[1px] px-[8px]'>2</p>
                <span className='w-3 h-1 bg-white border border-black mx-[-1px]'></span>
                <p className='bg-white border-black border border-solid rounded-full py-[1px] px-[8px]'>3</p>
                <span className='w-3 h-1 bg-white border border-black mx-[-1px]'></span>
                <p className='bg-white border-black border border-solid rounded-full py-[1px] px-[8px]'>4</p>
            </div>
            <div className='flex justify-center'>
                <form className='flex flex-col p-4 justify-center items-center w-[800px]' action="">
                    <Page1 />
                    <Page2 />
                    <Page3 />
                    <Page4 />

                    <div className='flex bottom-0 pt-8 flex-row justify-between'>
                        <a className='border mr-16 rounded-full font-bold px-16 py-2 border-black hover:text-white hover:bg-black transition-colors' href="">Back</a>
                        <a className='border ml-16 rounded-full font-bold px-16 py-2 border-[#3A49AC] bg-[#7581d8] text-[#3A49AC] hover:bg-[#5c66b3] transition-colors' href="">Next</a>
                        <div>
                            <input className='hidden' type="submit" id='submit' value=""/>
                            <label className='hidden' htmlFor="submit">Submit</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}