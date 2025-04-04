import photoIcon from '../assets/photo.svg'

const Hero = () => {
    return <main className="container mx-auto flex flex-col items-center">
        <h1 className="text-white font-bold text-4xl mb-8">Gerador de Imagem e Texto Alternativo</h1>

        <form action="" method="post" className="border border-white rounded-md p-5 flex flex-col w-full">
            <div className="h-[300px] flex items-center justify-center relative">
                <input type="file" name="img" id="img" className="p-2 rounded-md border h-full w-full border-white border-dashed relative z-[1] cursor-pointer" />

                <div className="absolute text-white flex flex-col justify-center items-center">
                    <img src={photoIcon} alt="" className='h-[60px]' />
                    {window.innerWidth < 768 ? <p>Clique para selecionar a imagem</p> : <p>Clique ou arraste para selecionar a imagem</p>}
                    <p className='text-neutral-300'>PNG, JPG ou SVG (máx. 5mb)</p>
                </div>
            </div>

            <button className="bg-blue-500 cursor-pointer text-white p-2 rounded-md mt-5">Gerar</button>
        </form>
    </main>
}

export default Hero 