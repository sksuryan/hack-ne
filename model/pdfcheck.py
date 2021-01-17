import sys, fitz
import spacy
import resume_parser


nlp_model = spacy.load('model/nlp_ner_model')


def modify(filepath):
    fname = "filepath"
    doc = fitz.open(fname)
    text = ""
    for page in doc:
    text = text + str(page.getText())
    tx = " ".join(text.split('\n'))
    dict = {}
    # Applying the model
    doc = nlp_model(tx)
    for ent in doc.ents:
    print(f'{ent.label_.upper():{30}}- {ent.text}')
    dict.update({ent.label_.lower():ent.text})
    changed= tx.replace(dict['name'],"********")
    name = dict['name']
    print(changed)
    f = open('{}.txt'.format(dict['name']), "w")
    f.write(changed)
    f.close()

    #open and read the file after the appending:
    f = open('{}.txt'.format(dict['name']), "r")
    print(f.read())
    f.close()