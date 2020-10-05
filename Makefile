.PHONY: all

LaTeX = xelatex
LaTeX_OPTS = -synctex=1 -interaction=nonstopmode
SITE_DIR = site/
FILES = drive/drive.pdf \
        regolamento/regolamento.pdf
FILES += $(shell find faq_files -mindepth 2 -maxdepth 2 -name \*.tex -type f | awk '{ gsub(".tex$$",".pdf",$$1); print $$1 };' )

%.pdf: %.tex
	cd $(?D) && $(LaTeX) $(LaTeX_OPTS) $(?F)

all: $(FILES)
	@find . -name \*.pdf ! -path "./site/*" -exec cp --parents '{}' $(SITE_DIR) \;
	@echo "All done!"

clean:
	@rm -f $(FILES)
	@(eval cd $(SITE_DIR) && rm -f $(FILES))
	@echo "PDFs deleted!"

