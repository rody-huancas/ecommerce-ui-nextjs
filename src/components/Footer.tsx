import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            NOVTIQSHOP.
          </p>
        </Link>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NOVTIQSHOP.
        </p>
        <p className="text-sm text-gray-400">Todos los derechos reservados.</p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href="/">Inicio</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Política de privacidad</Link>
        <Link href="/">Términos y condiciones</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href="/">Todos los productos</Link>
        <Link href="/">Productos de moda</Link>
        <Link href="/">Productos de tecnología</Link>
        <Link href="/">Productos de hogar</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Enlaces</p>
        <Link href="/">Sobre nosotros</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Preguntas frecuentes</Link>
        <Link href="/">Política de devoluciones</Link>
      </div>
    </footer>
  );
};

export default Footer;
