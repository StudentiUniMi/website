.PHONY: all

LaTeX = xelatex
LaTeX_OPTS = -synctex=1 -interaction=nonstopmode
SITE_DIR = site/
FILES = drive/drive.pdf \
        regolamento/regolamento.pdf \
        faq_files/reti_di_calcolatori/reti_di_calcolatori.pdf \
        faq_files/tecnologie_e_linguaggi_web/tecnologie_e_linguaggi_web.pdf

%.pdf: %.tex
	cd $(?D) && $(LaTeX) $(LaTeX_OPTS) $(?F)

all: $(FILES)
	@find . -name \*.pdf ! -path "./site/*" -exec cp --parents '{}' $(SITE_DIR) \;
	@echo "All done!"

clean:
	@rm -f $(FILES)
	@(eval cd $(SITE_DIR) && rm -f $(FILES))
	@echo "PDFs deleted!"

