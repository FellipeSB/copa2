export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white text-center py-8 px-4 border-t border-gray-100 text-xs text-gray-400 font-medium">
      <p>© {year} Álbum da Copa Personalizável. Todos os direitos reservados.</p>
    </footer>
  );
}
