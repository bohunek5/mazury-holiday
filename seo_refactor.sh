#!/bin/bash
PAGES=("apartamenty" "domki" "czarter" "atrakcje" "koncerty" "kontakt" "faq" "pokoje" "polityka-prywatnosci" "regulamin" "rodo" "wspolpraca" "projekty-unijne")

for PAGE in "${PAGES[@]}"; do
  DIR="src/app/$PAGE"
  if [ -f "$DIR/page.tsx" ] && grep -q '"use client"' "$DIR/page.tsx"; then
    echo "Refactoring $DIR..."
    mv "$DIR/page.tsx" "$DIR/page.client.tsx"
    
    # Generate Server Component
    TITLE=$(echo "$PAGE" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')
    if [ "$PAGE" == "polityka-prywatnosci" ]; then TITLE="Polityka Prywatności"; fi
    if [ "$PAGE" == "projekty-unijne" ]; then TITLE="Projekty Unijne"; fi
    
    cat << TSX > "$DIR/page.tsx"
import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: '$TITLE',
    description: 'Sprawdź naszą ofertę na $TITLE w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/$PAGE',
    },
};

export default function Page() {
    return <ClientPage />;
}
TSX
  fi
done
