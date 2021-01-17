import sys, fitz
import spacy
import resume_parser

nlp_model = spacy.load('C:/Users/VIDHI/Desktop/Resume Parser/nlp_ner_model')


fname = 'Alice Clark CV.pdf'
doc = fitz.open(fname)
text = ""
for page in doc:
    text = text + str(page.getText())
tx = " ".join(text.split('\n'))
#print(tx)

# Applying the model
doc = nlp_model(tx)
for ent in doc.ents:
    print(f'{ent.label_.upper():{30}}- {ent.text}')



