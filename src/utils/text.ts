/**
 * Playfair Display's "&" glyph has a heavy swash that reads as a musical
 * note in bold display headings. Render it in the sans font instead.
 */
export function styledAmpersand(text: string): string {
  return text.replaceAll('&', '<span class="font-sans not-italic">&</span>');
}
